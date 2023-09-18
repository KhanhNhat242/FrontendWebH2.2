import Paper from "./Paper";

function TopPaper({ papers }) {
    const typePaper = 1

    return ( 
        <>
            <Paper typePaper={typePaper} paper={papers} />
        </>
     );
}

export default TopPaper;