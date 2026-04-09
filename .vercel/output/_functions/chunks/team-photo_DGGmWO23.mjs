const teamPhoto = new Proxy({"src":"/_astro/team-photo.CbtWTGVv.jpg","width":768,"height":508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lucas/Developer/Next/xendrapro-website/src/assets/team-photo.jpg";
							}
							
							return target[name];
						}
					});

export { teamPhoto as t };
