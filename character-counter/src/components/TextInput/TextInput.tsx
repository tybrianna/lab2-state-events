import { useState } from "react";
import { TextInputProps } from "./TextInput";

const TextInput = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}: TextInputProps) => {
  const [text, setText] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: "100%", minHeight: "120px", padding: "10px" }}
    />
  );
};

export default TextInput;