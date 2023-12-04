export type CounterProps = {
    value: number;
    maximumValue: number;
    minimumValue: number;
    errorMessage: string|null
}

const counterData: CounterProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 10,
    errorMessage: null
}

export default counterData