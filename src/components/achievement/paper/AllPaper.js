import Paper from "./Paper";

function AllPaper({ commonPaper }) {
    const typePaper = 2

    return ( 
        <>
            <Paper typePaper={typePaper} commonPaper={commonPaper} />
        </>
    );
}

export default AllPaper;