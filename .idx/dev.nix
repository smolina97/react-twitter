{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.fastfetch
    pkgs.nodejs_latest
  ];
  idx.extensions = [
    
  
 "GitHub.github-vscode-theme"
 "rvest.vs-code-prettier-eslint"
 "krish-r.vscode-toggle-terminal"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}