<div align="center">
  
# CARLAHaze: A Large-scale Synthetic Dataset for Outdoor Image Dehazing
[Leo Thomas Ramos](https://www.linkedin.com/in/leo-thomas-ramos/)\, [Henry Valesaca](#)\, [Ángel D. Sappa](https://es.linkedin.com/in/angel-sappa-61532b17)
</div>

<!-- This repository is the official Pytorch implementation for [SkyScenes](). -->

<!-- [![Website](https://img.shields.io/badge/Project-Website-orange)](https://hoffman-group.github.io/SkyScenes/) [![arXiv](https://img.shields.io/badge/arXiv-SkyScenes-b31b1b.svg)](#)  -->


<!-- [![Watch the Demo](./assets/robust_aerial_videos.mp4)](./assets/robust_aerial_videos.mp4) -->

<img src="./assets/teaser.jpeg" width="100%"/>

## About the project

We present CARLAHaze, a synthetic dataset designed for outdoor image dehazing. CARLAHaze contains 10,000 high-resolution paired images (clean and hazy), distributed across 10 different scenarios and 10 incremental haze intensity levels. The dataset includes diverse scenarios and visual elements, distance-based haze distribution consistent with realistic atmospheric conditions, and multiple viewpoints enhancing visual variability. Additionally, two preprocessed versions with standardized resolutions of 640x480 and 512x512 pixels are provided, each containing 40,000 images. CARLAHaze also offers predefined splits for training, validation, and testing to facilitate its use. 

## Download dataset

The dataset is available for download via IEEE IEEE DataPort [here](#).

<!-- ## 📣 Announcements

SkyScenes has been accepted at [ECCV 2024](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/10113_ECCV_2024_paper.php) ! -->

## Data set description

The Augmented-DeepSpaceYolo dataset increases the number of images from the original 4,696 to 8,421 by applying data augmentation techniques. These transformations were carefully selected to simulate real-world variations encountered in astronomical imaging, enhancing model robustness and evaluation.

The following transformations were applied:

* **Cropping & zooming:** 0% minimum zoom, 20% maximum zoom
* **Rotations:** Between -15° and +15°
* **Brightness adjustments:** -15% to +15%
* **Blurring:** Up to 2.5 pixels
* **Noise addition:** Up to 0.15% of pixels

These augmentations reflect common challenges in astronomical observations:

* **Cropping & zooming** simulate variations in focal length and different perspectives.
* **Rotations** account for telescope movement and Earth’s rotation.
* **Brightness adjustments** replicate fluctuating light conditions and atmospheric interference.
* **Blurring** mimics slight defocusing and turbulence effects.
* **Noise addition** replicates sensor noise and other random artifacts affecting image quality.

A default split is provided, corresponding to the one used in the paper:

| Split        | # Images   |
|----------------|----------|
| Train       | 7,486   |
| Valid   | 469  |
| Test           | 466  |

The labels are provided in **YOLO format**, making them compatible with popular object detection frameworks. The images are in JPG format, with a resolution of 608×608 pixels.

## License

Distributed under MIT license. See `LICENSE` for more information.

## BibTex

If you find this dataset useful, please star ⭐️⭐️⭐️ our repo and cite our paper.

```
soon
```
