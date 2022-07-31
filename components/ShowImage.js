import Image from 'next/image'

const ShowImage = (imgSrc) => {
    return (
        <div>
            {/* <Image src={imgSrc} layout="fill"/>    */}
            <Image src={imgSrc} layout="responsive"/>   
        </div>
    )
}

export default ShowImage
