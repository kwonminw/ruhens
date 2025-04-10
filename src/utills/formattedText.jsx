// formattedText.jsx

export const formattedBr = (sentence) => {
    return sentence.split('\n').map((line, idx) => (
        <span key={idx}>
            {line}
            <br />
        </span>
    ))
};