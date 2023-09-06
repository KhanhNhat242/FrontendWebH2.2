import Paper from "./Paper";

function TopPaper({ topPaper }) {
    const typePaper = 1

    return ( 
        <>
            <Paper typePaper={typePaper} topPaper={topPaper} />
        </>
     );
}

export default TopPaper;