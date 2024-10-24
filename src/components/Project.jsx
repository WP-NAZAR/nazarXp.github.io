import project1 from '../assets/img/project_1.png'
export default function Project() {
  return (
    <>
      <div className="w-full h-[25vh] text-sky-950">
        <div className="flex justify-between p-[10px]">
          <h1>Project</h1>
          <p>See all</p>
        </div>
        <div className="flex justify-center items-center gap-[20px] py-[10px]">
          <div className="w-[90px] h-[120px] bg-blue-400">
            <img src={project1} alt="Project 1" className='w-full h-full' />
          </div>
          <div className="w-[90px] h-[120px] bg-blue-400">
            <img src={project1} alt="Project 1" className='w-full h-full' />
          </div>
          <div className="w-[90px] h-[120px] bg-blue-400">
            <img src={project1} alt="Project 1" className='w-full h-full' />
          </div>
        </div>
      </div>
    </>
  );
}
