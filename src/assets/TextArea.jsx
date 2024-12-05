import { useState } from "react";
import { Textarea, Button } from "@material-tailwind/react";

export default function CommentBoxTextarea() {
  const [text, setText] = useState("");
  const maxLength = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div className="w-96">
      <Textarea
        label="Message"
        value={text}
        onChange={handleChange}
        color={text.length === maxLength ? "red" : "blue"}
      />
      <div
        className={`flex gap-1 items-center justify-between text-sm mt-1 ${
          text.length === maxLength ? "text-red-500" : "text-gray-500"
        }`}
      >
        <p>
          {text.length}/{maxLength} caracteres
        </p>
        <p className="flex gap-1">
          <Button size="sm" color="red" variant="text" className="rounded-md">
            Cancel
          </Button>
          <Button size="sm" color="blue" className="rounded-md">
            Post Comment
          </Button>
        </p>
      </div>
    </div>
  );
}
