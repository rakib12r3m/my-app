import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 */}
        <p className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-base md:text-lg text-base-content/70">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="btn btn-primary px-8"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

