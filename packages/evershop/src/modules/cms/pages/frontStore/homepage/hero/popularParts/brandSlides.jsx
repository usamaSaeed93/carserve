
export const images = [
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=384&q=75",
        alt: "algolio"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=384&q=75",
        alt: "microsoft"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=384&q=75",
        alt: "intel"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=384&q=75",
        alt: "nividia"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=384&q=75",
        alt: "atlassian"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuber.c72e37e8.png&w=384&q=75",
        alt: "uber"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.b63b30d6.png&w=384&q=75",
        alt: "stripe"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.9554db3d.png&w=384&q=75",
        alt: "zendesk"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadobe.eb5d0979.png&w=384&q=75",
        alt: "adobe"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify.a92c5be1.png&w=384&q=75",
        alt: "shopify"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgolia.a8da3961.png&w=384&q=75",
        alt: "algolio"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmicrosoft.73a237e1.png&w=384&q=75",
        alt: "microsoft"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintel.8f37f35e.png&w=384&q=75",
        alt: "intel"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnvidia.cd0e3efe.png&w=384&q=75",
        alt: "nividia"
    },
    {
        src: "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatlassian.6951c1d4.png&w=384&q=75",
        alt: "atlassian"
    }
];

export default function BrandsStrip() {
    let count = 0;
    return (
        <div
        // className={`${styles.brands_strip} w-[10000px] bg-white h-[10rem] flex justify-start items-center brands-strip`}
        >
            {images.map((image) => <Image src={image.src} alt={image.alt} key={count++} />)}
        </div>
    );
}



function Image({ src, alt }) {
    return (
        <image
            className="object-contain mx-[3rem]"
            src={src}
            alt={alt}
            width="200px"
        />
    );
}