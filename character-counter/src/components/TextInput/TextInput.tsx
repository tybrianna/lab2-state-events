import { useState, useEffect } from "react";
import "./styles.css";

const TextInput = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
} : {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    onTextChange(text);
  }, [text]);

  return (
    <textarea
      className="textarea"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;