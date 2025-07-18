import backgroundImage from "../assets/Home/home-background.jpg";
import rightsideimage from "../assets/Careers/careers.jpg";

function Careers() {
  return (
    <section 
      className="w-full py-20 px-6 mt-40 md:px-16 bg-white/70 text-center bg-fixed bg-center bg-cover relative min-h-[500px]" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        className="text-3xl font-bold tracking-widest mb-10"
        style={{ fontFamily: "Azonix" }}
      >
        CAREERS
      </h1>

      <div className="flex flex-col md:flex-row w-full gap-8 items-start justify-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-pink-600 mb-6">JOIN OUR FAMILY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">Your name</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Phone</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Your email</label>
                <input type="email" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Available Positions</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>graphic designer</option>
                  <option>frontend developer</option>
                  <option>backend developer</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block mb-1 text-sm">Upload file</label>
                <input type="file" className="w-full" />
              </div>
              <div className="md:col-span-1">
                <label className="block mb-1 text-sm">Your message (optional)</label>
                <textarea className="w-full border rounded px-3 py-2 h-24"></textarea>
              </div>
            </div>
            <button className="mt-6 w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition">
              Submit
            </button>
          </form>
        </div>

        <div
          className="w-full md:w-1/2 min-h-[500px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${rightsideimage})` }}
        ></div>
      </div>
    </section>
  );
}

export default Careers;
