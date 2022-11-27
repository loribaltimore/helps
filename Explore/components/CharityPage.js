
function CharityPage(props) {

    let { currentOrg } = props;

    return (
        <div>
            {currentOrg.description}
        </div>
    )
};
export default CharityPage;