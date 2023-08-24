import "./YouTubeSection.css";
export default function YouTubeSection() {
  const handleJoinUsClick = () => {
    const formSection = document.getElementById("joinFormSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="mt-20 cursor-default">
      <div className=" mb-11 flex flex-col justify-center items-center ">
        <div className="text-center mx-4 lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">
            Your Journey to the <span className="text-red-500">Beyond</span>{" "}
            starts here.
          </h1>
          <p className="mt-6 text-xl text-center text-black">
            <span
              className="underline-hover cursor-pointer"
              onClick={handleJoinUsClick}
            >
              Join us
            </span>{" "}
            and we can explore together
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl bg-white mb-4 cursor-default">
          Here is a sneak peek of what our journeys are like
        </div>
        <div className="mt-16 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <iframe
              src="https://www.youtube.com/embed/1kGTCEuX3PE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/ocenlwAm0wk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/c65Xdio8in0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Zal6D0sG-q4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
