import uniqueId from "@/utils/uniqueId";
import React, { createContext, Fragment, useContext } from "react";
const context = createContext({});

const Render = ({ splittedText = "", index }) => {
  const {
    lastIndex,
    newHighlight,
    highlightSeparator,
    renderText,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    isString,
  } = useContext(context);

  const newT = splittedText.trim();
  const lowerT = newT.toLowerCase();
  let isHave = isString
    ? lowerT.includes(newHighlight)
    : newHighlight.find((it) =>
        lowerT.toLowerCase().includes(it.toLowerCase())
      );
  if (newHighlight.length && isHave) {
    if (isString && lowerT === newHighlight) {
      return renderHighlight?.(newT, index === lastIndex, highlightClassName);
    }
    const highlightInArr = newT.split(highlightSeparator);
    const highlightInArrLast = highlightInArr.length - 1;
    return highlightInArr.map((st, j) => (
      <Fragment key={j}>
        {isString && st.toLowerCase() === newHighlight
          ? renderHighlight?.(st, highlightInArrLast === j, highlightClassName)
          : !isString &&
            newHighlight.find((it) => st.toLowerCase() === it.toLowerCase())
          ? renderHighlight?.(st, highlightInArrLast === j, highlightClassName)
          : renderNonHighlight?.(st, highlightInArrLast === j)}
        {highlightSeparator}
      </Fragment>
    ));
  }
  return renderText?.(newT, index === lastIndex);
};

const TextSplitItem = ({ splittedText = "", index }) => {
  const { lastIndex, renderSeparator } = useContext(context);

  return (
    <Fragment>
      <Render splittedText={splittedText} index={index} />{" "}
      {index !== lastIndex && renderSeparator?.()}
    </Fragment>
  );
};

const TextSplit = ({
  text = "",
  separator = "\n",
  children = "",
  highlight = "",
  highlightSeparator = " ",
  highlightClassName = "",
  as: Tag = Fragment,
  renderText = (text = "", isLast = false) => text,
  renderSeparator = () => <br />,
  renderHighlight = (highlightedText = "", isLast = false, className = "") => (
    <span className={highlightClassName}>{highlightedText}</span>
  ),
  renderNonHighlight = (nonHighlightedText = "", isLast = false) =>
    nonHighlightedText,
  ...props
}) => {
  const newText = children || text;
  const arr = newText.split(separator);
  const lastIndex = arr.length - 1;
  let newHighlight = highlight;
  let isString = typeof highlight === "string";
  if (isString) {
    newHighlight = highlight.toLowerCase();
  }

  const contextValue = {
    lastIndex,
    newHighlight,
    highlightSeparator,
    renderText,
    renderSeparator,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    isString,
  };

  return (
    <context.Provider value={contextValue}>
      <Tag {...props}>
        {arr.map((splittedText, index) => (
          <TextSplitItem
            key={uniqueId()}
            index={index}
            splittedText={splittedText}
          />
        ))}
      </Tag>
    </context.Provider>
  );
};

export default TextSplit;
