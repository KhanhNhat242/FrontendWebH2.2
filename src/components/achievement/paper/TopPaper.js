import Paper from "./Paper";

function TopPaper({ papers }) {
    const typePaper = 1
    return ( 
        <>
            <Paper typePaper={typePaper} papers={papers} />
        </>
     );
}

export default TopPaper;