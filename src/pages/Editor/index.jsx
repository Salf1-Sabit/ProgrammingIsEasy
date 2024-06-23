/* eslint-disable react-hooks/rules-of-hooks */
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";
import Wrapper from "../../components/UI/Wrapper";
import LanguageSelector from "./LanguageSelector";

const index = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Wrapper className="my-[5%] sm:my-[2%] h-full">
      <div className="mb-[5%] sm:mb-[2%]">
        <h1 className="brand-logo text-base sm:text-lg cursor-pointer text-[#1E76CC]">
          &lt;/&gt; ProgrammingIsEasy
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">Online Compiler</p>
      </div>

      <div className="flex flex-col md:flex-row border border-gray-200">
        <div className="w-full md:w-[50%] h-[37vh] md:h-[75vh] overflow-y-hidden">
          <div className="flex justify-between items-center px-[1em] py-[.5em] border-b text-sm md:text-base bg-white">
            <h1 className="font-semibold text-gray-600">Editor</h1>
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>

          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            theme="light"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            className="border-r h-full"
          />
        </div>

        <Output editorRef={editorRef} language={language} />
      </div>
    </Wrapper>
  );
};

export default index;
