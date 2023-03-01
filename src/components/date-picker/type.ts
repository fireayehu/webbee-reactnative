export interface IDatePickerProps {
  label?: string;
  value: string | undefined;
  onChange: (date: string) => void;
}
