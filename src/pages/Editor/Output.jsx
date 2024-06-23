import { useContext, useState } from "react";
import { executeCode } from "./api";

// context
import { SnackbarContext } from "../../components/store/SnackbarContext";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [standardInput, setStandardInput] = useState(null);

  const { handleSnackbarClick } = useContext(SnackbarContext);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      setOutput(null);
      const { run: result } = await executeCode(
        language,
        sourceCode,
        standardInput
      );
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      handleSnackbarClick(error.message || "Unable to run code", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-full md:w-[50%] h-[37vh] md:h-[75vh] overflow-y-hidden border-t md:border-t-0 mt-12 md:mt-0 text-sm md:text-base ${
        isLoading
          ? "bg-white text-gray-800"
          : isError
          ? "bg-red-50 text-red-500 border-red-500"
          : output && "text-green-600 bg-green-50"
      }`}
    >
      <div className="flex justify-between items-center px-[1em] py-[.5em] border-b text-sm md:text-base bg-white">
        <h1 className="font-semibold text-gray-600">Output</h1>
        <div className="flex gap-1 sm:gap-2">
          <button
            className="border px-[1em] py-[.2em]  flex justify-center items-center hover:bg-gray-100 transition-all duration-150 text-gray-800"
            onClick={() => {
              setOutput(null);
              setStandardInput(null);
            }}
          >
            <span>Clear</span>
          </button>
          <button
            onClick={runCode}
            className="border px-[1em] py-[.2em] bg-[#1E76CC] hover:bg-[#185ea3] text-white flex justify-center items-center duration-150 transition-all"
          >
            {!isLoading && <span className="font-medium">Run</span>}
            {isLoading && (
              <span className="loading loading-sm loading-spinner my-[2px]"></span>
            )}
          </button>
        </div>
      </div>

      {!output && !isLoading && (
        <textarea
          name=""
          id=""
          placeholder={"Enter your input here"}
          className="px-[1em] py-[.5em] overflow-y-scroll w-full h-full"
          onChange={(event) => setStandardInput(event.target.value)}
          value={standardInput}
        ></textarea>
      )}

      {isLoading && (
        <div className="text-gray-800 h-full flex justify-center items-center bg-[#e9f1fa]">
          <span className="loading loading-infinity loading-md lg:loading-lg"></span>
          <span className="ml-[.5em]">Running...</span>
        </div>
      )}

      <div className={`px-[1em] py-[.5em] h-full overflow-y-scroll`}>
        {!isLoading && output && output.map((line, i) => <p key={i}>{line}</p>)}
      </div>
    </div>
  );
};
export default Output;
