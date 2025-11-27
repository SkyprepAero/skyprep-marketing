import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadata({
    title: "DGCA Requirements - Complete Flight Training Guide",
    description:
      "Comprehensive guide to DGCA flight training requirements including flight hours, medical standards, written exams, and practical training for commercial pilot license.",
    canonicalPath: "/dgca-requirements",
    keywords: [
      "DGCA requirements",
      "flight training",
      "commercial pilot license",
      "aviation training",
      "pilot certification",
    ],
    openGraph: {
      type: "article",
    },
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function DGCARequirements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 full-bleed">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white w-full">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DGCA Requirements
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Complete guide to DGCA flight training requirements for commercial pilot license
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 w-full">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto">
            {/* Lorem Ipsum Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Flight Training Requirements
              </h2>
              
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="text-gray-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Medical Requirements
              </h3>
              
              <p className="text-gray-600 mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Written Examinations
              </h3>
              
              <p className="text-gray-600 mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Practical Training Standards
              </h3>
              
              <p className="text-gray-600 mb-6">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Checkride Preparation
              </h3>
              
              <p className="text-gray-600 mb-6">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Career Pathways
              </h3>
              
              <p className="text-gray-600 mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>

              <p className="text-gray-600 mb-6">
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Expert Guidance
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
