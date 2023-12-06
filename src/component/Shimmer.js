import '../../style.css'
const Shimmer = ()=>{
    return (
        <div className="flex flex-wrap">
            {Array(15).fill('').map((e, index) => <div key={index} className=" w-40 h-40 m-4 bg-slate-300"></div>)}
        </div>
    )
}
export default Shimmer