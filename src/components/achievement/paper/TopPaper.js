import Paper from "./Paper";

function TopPaper({ paper }) {
    const typePaper = 1

    return ( 
        <>
            <Paper typePaper={typePaper} paper={paper} />
        </>
     );
}

export default TopPaper;