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
    additionalText?: string;
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
    additionalText?: string;
    handleRangeChange: (n: number) => void;
}

type DragDropItem = {
    value: string;
    id: string;
}

type DragDropProps = {
    name: string;
    leftList: Array<DragDropItem>;
    leftTitle: string;
    rightList: Array<DragDropItem>;
    rightTitle: string;
    handleChange: (e: string) => void;
}