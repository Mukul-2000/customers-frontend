interface IText {
    value: any
}

export function FontBold(props: IText) {
    return <span className="fw-bold fs-12">{props.value}</span>
}