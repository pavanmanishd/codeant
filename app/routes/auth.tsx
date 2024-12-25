import { useState } from "react";
import CodeAntAILogo from "../assets/codeant.svg";
import GitLabLogo from "../assets/gitlab.svg";
import BitbucketLogo from "../assets/bitbucket.svg";
import AzureLogo from "../assets/azure.svg";
import GitHubLogo from "../assets/github.svg";
import SSOLogo from "../assets/sso.svg";
import CodeAntAIGreyLogo from "../assets/codeant-grey.svg";
import ChartLogo from "../assets/chart.svg";
import ArrowUpLogo from "../assets/arrowup.svg";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="flex flex-row bg-white text-black">
      <div className="flex-1 hidden sm:block">
        <div className="relative flex flex-1 flex-col items-center justify-center h-screen">
          <div className="flex flex-col w-[70%]">
            <div
              className="self-start w-[80%] bg-white rounded-3xl overflow-visible relative z-0"
              style={{ boxShadow: "0px 0px 24px rgba(8, 23, 53, 0.16)" }}
            >
              <div className="flex flex-row items-center w-[100%] gap-2 p-4">
                <img
                  src={CodeAntAILogo}
                  alt="CodeAnt AI Logo"
                  className="w-8"
                />
                <p>AI to Detect & Autofix Bad Code</p>
              </div>
              <hr className="flex-1 border border-gray-300" />
              <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-col items-center">
                  <p>30+</p>
                  <p>Language Support</p>
                </div>
                <div className="flex flex-col items-center">
                  <p>10K+</p>
                  <p>Developers</p>
                </div>
                <div className="flex flex-col items-center">
                  <p>100K+</p>
                  <p>Hours Saved</p>
                </div>
              </div>
            </div>
            <div
              className="w-[40%] bg-white self-end -ml-2 -mt-2 rounded-3xl relative z-10"
              style={{ boxShadow: "0px 0px 24px rgba(8, 23, 53, 0.16)" }}
            >
              <div className="flex flex-row justify-between items-center p-4">
                <img src={ChartLogo} alt="Chart Logo" className="w-[25%]" />
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <img
                      src={ArrowUpLogo}
                      alt="Arrow Up Logo"
                      className="w-3 h-3 mr-1"
                    />
                    <p>14%</p>
                  </div>
                  <p>This Week</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col px-4 pb-4">
                  <p>Issues Fixed</p>
                  <p>500K+</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={CodeAntAIGreyLogo}
            alt="CodeAnt AI Grey Logo"
            className="absolute left-0 bottom-0 w-[40%] mix-blend-normal z-10"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center p-6 min-w-[100%] h-[600px] mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
          <div className="flex flex-row items-center mb-4">
            <img
              src={CodeAntAILogo}
              alt="CodeAnt AI Logo"
              className="w-12 mb-4"
            />
            <p className="text-xl font-semibold">CodeAnt AI</p>
          </div>
          <h1 className="text-xl font-semibold mb-4">Welcome to CodeAnt AI</h1>

          <div className="flex items-center gap-2 w-full bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg mb-4">
            <button
              onClick={() => setActiveTab("SAAS")}
              className={`flex-1 py-2 rounded-lg text-[16px] font-semibold ${
                activeTab === "SAAS"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-700"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("Self Hosted")}
              className={`flex-1 py-2 rounded-lg text-[16px] font-semibold ${
                activeTab === "Self Hosted"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-700"
              }`}
            >
              Self Hosted
            </button>
          </div>

          {activeTab === "SAAS" ? (
            <div className="space-y-4 w-full">
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src={GitHubLogo} // Replace with GitHub logo URL
                  alt="GitHub Logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with GitHub
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src={BitbucketLogo} // Replace with Bitbucket logo URL
                  alt="Bitbucket Logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Bitbucket
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src={AzureLogo} // Replace with Azure DevOps logo URL
                  alt="Azure DevOps Logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Azure DevOps
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src={GitLabLogo} // Replace with GitLab logo URL
                  alt="GitLab Logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with GitLab
              </button>
            </div>
          ) : (
            <div className="space-y-4 w-full">
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src={GitLabLogo}
                  alt="GitLab Logo"
                  className="w-5 h-5 mr-2"
                />
                Self Hosted GitLab
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img src={SSOLogo} alt="SSO Logo" className="w-5 h-5 mr-2" />
                Sign in with SSO
              </button>
            </div>
          )}
        </div>

        <div className="mx-auto mt-4">
          <span className="text-sm text-gray-600">
            By signing up you agree to the Privacy Policy.
          </span>
        </div>
      </div>
    </div>
  );
}
