
const Contact = () => {
  return (
    <>
    <div className="flex items-center gap-8 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar"/>
            </div>
        </div>
        <p className="font-bold text-gray-200">user 1</p>
    </div>
    <div className="divider h-1 py-0 my-0" />
    </>
  )
}

export default Contact