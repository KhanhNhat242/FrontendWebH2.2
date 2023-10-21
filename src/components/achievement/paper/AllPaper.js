import Paper from "./Paper";

function AllPaper({ papers }) {
    const typePaper = 2

    return ( 
        <>
            <Paper typePaper={typePaper} papers={papers} />
        </>
    );
}

export default AllPaper;