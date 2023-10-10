import SyntaxHighlighter from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/night-owl";

export const DarkCodeSyntaxHighlighter = ({
  children,
}: {
  children: string;
}) => {
  return (
    <div className="lg:mb-3">
      <SyntaxHighlighter
        customStyle={{
          borderRadius: "0.5rem",
        }}
        language={jsx}
        style={dark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
