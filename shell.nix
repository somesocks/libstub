
{ pkgs ? import <nixpkgs> {} }:

let
in pkgs.mkShell {

	buildInputs = [
		pkgs.nodejs_20
		pkgs.gnumake
	];

	# shellHook = ''
	# '';

}
