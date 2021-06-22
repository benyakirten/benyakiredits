interface IClickListProps {
    list: Array;
    itemKey: string;
    handleClick: MouseEventHandler<HTMLLIElement>
}

interface LabelProps {
    htmlFor: string;
    children: string;
    explanation?: string;
}

interface IBaseInput {
    name: string;
    labelText: string;
}

interface ICheckboxProps extends IBaseInput {
    value: boolean;
    handleToggle: () => void;
}

interface ITextInputProps extends IBaseInput {
    value: string | number;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface ISelectProps extends IBaseInput {
    handleChange: (val: string | number | Array | SelectOption) => void;
    options: Array<SelectOption>;
    value: string | number | Array | SelectOption;
}

type SelectOption = {
    value: string;
    display: string;
}

interface IColorPickerProps extends IBaseInput {
    color: string;
    handleColorChange: (val: string) => void;
}

interface IRangeProps extends IBaseInput {
    rangeConsts: RangeValues;
    value: number;
    handleRangeChange: (n: number) => void;
}