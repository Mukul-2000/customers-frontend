import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { CustomerService } from "../../services/customer.service";

interface AddCustomerModalProps {
  show: boolean;
  onHide: () => void;
  onCustomerAdded?: () => void;
}

interface CustomerFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  billingAddress: string;
}

const initialFormData: CustomerFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  billingAddress: "",
};

export default function AddNewCustomerModal({
  show,
  onHide,
  onCustomerAdded,
}: AddCustomerModalProps) {
  const [formData, setFormData] = useState<CustomerFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<CustomerFormData>>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<CustomerFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^\d{7,15}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid phone number (digits only).";
      }
    if (!formData.billingAddress.trim()) newErrors.billingAddress = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await CustomerService.createCustomer(formData); // adjust to your API method
      if (res.status === 200 || res.status === 201) {
        toast.success("Customer added successfully!");
        setFormData(initialFormData);
        setErrors({});
        onCustomerAdded?.();
        onHide();
      } else {
        toast.error("Failed to add customer. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="billingAddress"
              placeholder="Enter address"
              value={formData.billingAddress}
              onChange={handleChange}
              isInvalid={!!errors.billingAddress}
            />
            <Form.Control.Feedback type="invalid">
              {errors.billingAddress}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Adding...
            </>
          ) : (
            "Add"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}