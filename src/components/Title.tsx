
const Title = (props: any) => {
    const pattern = /\[(.*?)\]/; 

    const matches = props.title.match(pattern);
    const parts = props.title.split(pattern);
    const firstText = parts[0].trim();
    const secondText = matches ? matches[1] : '';
    // console.log(secondText, 'second text')
    //const firstText = matches ? matches[0] : '';
    let JSX = 
        <div className="flex justify-center text-4xl font-bold flex-wrap"> 
            <span>{firstText}</span> 
            <span className="font-thin text-4xl mt-auto pb-2 pl-3">{secondText}</span>
        </div>
    return JSX;
}

export default Title;