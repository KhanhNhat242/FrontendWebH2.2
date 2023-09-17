import Paper from "./Paper";

function AllPaper({ paper }) {
    const typePaper = 2

    return ( 
        <>
            <Paper typePaper={typePaper} paper={paper} />
        </>
    );
}

export default AllPaper;