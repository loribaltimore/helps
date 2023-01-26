
function QueuePanel({donation, setCurrentPage}) {

    return (
        <div style={{ borderRadius: '2rem', border: '1px solid black' }}>
            {donation.org.name}
        </div>
    )
};

export default QueuePanel;