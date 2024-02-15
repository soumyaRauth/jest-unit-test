import FileInput from "@/app/components/MyTextField";
import MyTextField from "@/app/components/MyTextField";
import Home from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";



describe("fileInput", ()=>{
    it("accepts .txt files", () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<FileInput onChange={onChange} />);
    
        const input = getByLabelText("File input");
        fireEvent.change(input, { target: { files: [new File([""], "file.txt", { type: "text/plain" })] } });
        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ name: "file.txt" }));
      });


      it("rejects non-txt files", () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<FileInput onChange={onChange} />);
    
        const input = getByLabelText("File input");
        fireEvent.change(input, { target: { files: [new File([""], "file.pdf", { type: "application/pdf" })] } });
        expect(onChange).not.toHaveBeenCalled();
      });
})