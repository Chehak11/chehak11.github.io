# Chehak Aggarwal — Portfolio

Static site (plain HTML/CSS/JS). No build step.

## 1 · Add your images

Save each image into the `images/` folder **with exactly this filename**. Any image that's missing shows a labeled placeholder, so the site works before every image is in.

| Filename | What it is | Where to get it |
| --- | --- | --- |
| `gripper-render.png` | Gripper front render | ✅ already added |
| `gripper-motion.mp4` | Gripper motion-study video (keep under ~20 MB) | Export from Onshape |
| `jelix-cutaway.png` | JELIX cutaway (home page card) | Old site, JELIX page, top image |
| `jelix-labeled.png` | JELIX labeled cutaway (piston, cam, gears…) | Old site, JELIX "System Architecture" |
| `jelix-mechanism.png` | Schematic (a)–(e) of rib motion | Old site, JELIX "Propulsion Mechanism" |
| `jelix-adams-plots.png` | ADAMS plots (a)–(g) | Old site, JELIX "Mechanical Design & Simulation" |
| `jelix-fbd.png` | Free-body diagram | Old site, JELIX "Free Body Analysis" |
| `rover-full.png` | Full rover render (PDF cover) | Old site, home page |
| `rover-arm-labeled.png` | Arm with Hand / Wrist / Electrical Box / Forearm labels | Old site, Yonder Dynamics section 1 |
| `claw-render.png` | Science claw + hand render | Old site, Yonder Dynamics section 3 |
| `claw-photo.jpg` | Photo of the built claw | Your photos |
| `enclosure-open.png` | Enclosure, open, with ODrive + fuse board | Old site, Yonder Dynamics section 1 |
| `enclosure-closed.png` | Enclosure, closed | Old site, Yonder Dynamics section 1 |
| `fea-elbow.png` | Elbow von Mises plot | Old site, Yonder Dynamics section 2 (export a larger version from Onshape if you can) |
| `usv-frame.png` | USV frame on pontoons | Old site, Yonder Deep top image |
| `lidar-mount.png` | LiDAR mount close-up | Re-render in Fusion 360 (the old image is too far out) |
| `lidar-on-frame.png` | LiDAR mount on the frame | Old site, Yonder Deep section 1 |
| `pool-test.jpg` | Pool-test photo or video still | Team photos |
| `headshot.jpg` | Your photo | — |

To save from the old site: open the page, right-click the image → **Open image in new tab**, then right-click → **Save image as…**. Renders exported straight from Onshape, CATIA or Fusion will look sharper.

## 2 · Fill in two placeholders

- `about.html`: replace `https://www.instagram.com/` with your art account's link.
- `portfolio-print.html`: replace `[username]` with your GitHub username.

## 3 · Put it on GitHub Pages (free)

1. On GitHub, create a **new public repository** named exactly `YOUR-USERNAME.github.io`.
2. Click **uploading an existing file**, then drag in *everything inside this folder* (not the folder itself). Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io`.

To update later, upload the changed files to the repo again, or edit them directly on GitHub.

## 4 · Make the PDF portfolio

1. Open `portfolio-print.html` in **Chrome**. Double-clicking the file works once the images are in `images/`.
2. Choose **Print** → Destination: **Save as PDF** · Paper: **Letter** · Margins: **None** · **Background graphics: ON**.
3. Save it as `Chehak_Aggarwal_Portfolio.pdf`. It should come out to five pages.

## Files

```
index.html             home
about.html             about (boxing, art)
projects/jelix.html    DWG 01
projects/rover-arm.html DWG 02
projects/arctic-usv.html DWG 03
projects/gripper.html  DWG 04
portfolio-print.html   5-page PDF source
resume.pdf             public résumé (no phone number)
assets/style.css, assets/main.js
images/                your images
```
