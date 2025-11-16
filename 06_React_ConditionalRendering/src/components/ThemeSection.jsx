function ThemeSection({theme}) {

    return (
        <>
            <div className="card w-50 m-auto shadow">
                <div className={`card-header p-5 text-center ${theme?"bg-dark text-white":"bg-light"}`}>
                    <h1>{theme?"You are in Dark Mode Now":"You are in Light Mode Now"}</h1>
                </div>
                <div className="card-body">
                    <p style={{color:`${theme?"red":"blue"}`}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quae voluptatum, minima sapiente eos rerum dolore quam, impedit qui beatae deserunt, facilis officia aut. Aliquid deleniti provident aspernatur quae tenetur.
                    </p>
                </div>
            </div>
        </>
    );
}
export default ThemeSection;