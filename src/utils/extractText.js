export const extractText = (content) => {
    const textContent = content
      .map((block) => block.children?.map((child) => child.text).join(" ") || "")
      .join(" ");
    return textContent.slice(0, 100) + (textContent.length > 50 ? "..." : "");
  };