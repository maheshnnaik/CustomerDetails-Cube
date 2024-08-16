export const ImageCard = (props: any) => {
    const { imageSrc } = props;
    return (
        <img src={imageSrc} alt="random-image" />
    )
}