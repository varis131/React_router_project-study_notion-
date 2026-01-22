import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full bg-gray-950 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="py-20">
        <div className="w-11/12 max-w-[1160px] mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn Skills That Actually Matter 🚀
          </h1>

          <p className="text-gray-400 max-w-[700px]">
            Build real-world skills with guided courses, hands-on projects,
            and industry-ready learning paths.
          </p>

          <div className="flex gap-4 mt-4">
            <Link to="/signup">
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg">
                Get Started
              </button>
            </Link>

            <Link to="/login">
              <button className="border border-gray-700 hover:bg-gray-800 transition px-6 py-3 rounded-lg">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-900 py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              📚 Structured Learning
            </h3>
            <p className="text-gray-400">
              Step-by-step courses designed by industry experts.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              🛠 Hands-on Projects
            </h3>
            <p className="text-gray-400">
              Practice with real-world projects and case studies.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              🎯 Career Focused
            </h3>
            <p className="text-gray-400">
              Skills that help you crack interviews & land jobs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="w-11/12 max-w-[1160px] mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why learners love our platform ❤️
            </h2>

            <p className="text-gray-400 mb-4">
              We focus on practical skills instead of boring theory.
              Learn at your own pace with industry-relevant content.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>✅ Beginner friendly courses</li>
              <li>✅ Industry-level curriculum</li>
              <li>✅ Learn anytime, anywhere</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl h-[260px] flex items-center justify-center text-gray-400">
            Image / Illustration Here
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-indigo-600 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start learning?
        </h2>

        <p className="mb-6">
          Join thousands of learners building their future today.
        </p>

        <Link to="/signup">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Create Free Account
          </button>
        </Link>
      </section>

    </div>
  );
};

export default Home;
