export const CustomerCard = (props: any) => {
    const { item, selected, onClick } = props;
    return (
        <div className={`card-container ${selected ? 'active' : ''}`} onClick={onClick}>
            <span id='customer-name'>{item.name}</span>
            <span id='customer-title'>{item.title}</span>
        </div>
    )
}