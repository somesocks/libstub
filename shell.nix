
{ pkgs ? import <nixpkgs> {} }:

let
	NPM_CONFIG_PREFIX = toString ./.npm;
in pkgs.mkShell {

	buildInputs = [
		pkgs.nodejs_20
		pkgs.gnumake
	];

	inherit NPM_CONFIG_PREFIX;

	shellHook = ''
	export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH";
	./tasks/setup-pnpm.sh
	'';

}
