import { useTheme } from "@/components/theme-provider";

export function GitHubSection() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img
            src={
              theme === "dark"
                ? "https://raw.githubusercontent.com/BankkRoll/BankkRoll/7b0a3fff48fa44231741d481b8a2c5e925a81c21/images/github-contribution-grid-snake-dark.svg"
                : "https://raw.githubusercontent.com/BankkRoll/BankkRoll/7b0a3fff48fa44231741d481b8a2c5e925a81c21/images/github-contribution-grid-snake.svg"
            }
            alt="GitHub Contribution Grid"
            className="w-full h-auto"
          />
        </div>
        <a
          href="https://github.com/BankkRoll"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-primary hover:underline"
          data-testid="link-github"
        >
          @BankkRoll on GitHub
        </a>
      </div>
    </section>
  );
}
