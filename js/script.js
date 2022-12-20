$(document).ready(function () {
  //////// Three.js
  const canvas = document.querySelector("canvas.webgl");
  const scene = new THREE.Scene();
  // objects
  const material = new THREE.MeshToonMaterial({ color: "#ddd" });
  const objectsDistance = 5;
  const particlesMaterial = new THREE.PointsMaterial({
    color: "#888",
    sizeAttenuation: true,
    size: 0.05,
  });
  // meshes
  const mesh1 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
  const sectionMeshes = [mesh1];
  scene.add(mesh1);
  // cursor event
  const cursor = {};
  cursor.x = 0;
  cursor.y = 0;
  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  });
  // lights effect
  const directionalLight = new THREE.DirectionalLight("#fff", 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  mesh1.position.x = 2;
  mesh1.position.y = -objectsDistance * 0;
  // sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  window.addEventListener("resize", () => {
    // update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
  // scroll event
  let scrollY = window.scrollY;
  let currentSection = 0;
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);
    if (newSection != currentSection) {
      currentSection = newSection;
      gsap.to(sectionMeshes[currentSection].rotation, {
        duration: 1.5,
        ease: "power2.inOut",
        x: "+=6",
        y: "+=3",
      });
    }
  });
  // camera
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);
  // base camera
  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 6;
  cameraGroup.add(camera);
  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // animation
  const clock = new THREE.Clock();
  let previousTime = 0;
  // effect
  // geometry effect
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] =
      objectsDistance * 0.5 -
      Math.random() * objectsDistance * sectionMeshes.length;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  // points effect
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    // animation meshes
    for (const mesh of sectionMeshes) {
      mesh.rotation.x = elapsedTime * 0.1;
      mesh.rotation.y = elapsedTime * 0.12;
      mesh.rotation.x += deltaTime * 0.1;
      mesh.rotation.y += deltaTime * 0.12;
    }
    // animation camera
    camera.position.y = (-scrollY / sizes.height) * objectsDistance;
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;
    cameraGroup.position.x +=
      (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
    cameraGroup.position.y +=
      (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

    //// render
    renderer.render(scene, camera);
    // call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();

  //////// fullpage.js
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });

  //////// datevar
  var now = new Date();
  var year = now.getFullYear();
  var career_year = year - "2019" + 1;
  $(".par_year").text(career_year + "년차");

  //////// slider
  const slider = document.querySelector(".slider");
  const trail = document.querySelector(".trail").querySelectorAll("div");
  let value = 0;
  let trailValue = 0;
  let interval = 4000;
  const slide = (condition) => {
    clearInterval(start);
    condition === "increase" ? initiateINC() : initiateDEC();
    move(value, trailValue);
    animate();
    start = setInterval(() => slide("increase"), interval);
  };
  const initiateINC = () => {
    trail.forEach((cur) => cur.classList.remove("trail_active"));
    value === 75 ? (value = 0) : (value += 25);
    trailUpdate();
  };

  // function for decrease(backward, previous) configuration
  const initiateDEC = () => {
    // Remove active from all trails
    trail.forEach((cur) => cur.classList.remove("trail_active"));
    // decrease transform value
    value === 0 ? (value = 75) : (value -= 25);
    // update trailValue based on value
    trailUpdate();
  };

  // function to transform slide
  const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`;
    //add active class to the current trail
    trail[T].classList.add("trail_active");
  };

  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: "power2.inOut" },
  });
  tl.from(".bg", { x: "-100%", opacity: 0 })
    .from(".details_p", { opacity: 0 }, "-=0.3")
    .from(".details_h1", { opacity: 0, y: "30px" }, "-=0.3")
    .from(".details_btn", { opacity: 0, y: "-40px" }, "-=0.8");

  // function to restart animation
  const animate = () => tl.restart();

  // function to update trailValue based on slide value
  const trailUpdate = () => {
    if (value === 0) {
      trailValue = 0;
    } else if (value === 25) {
      trailValue = 1;
    } else if (value === 50) {
      trailValue = 2;
    } else if (value === 75) {
      trailValue = 3;
    }
  };

  // Start interval for slides
  let start = setInterval(() => slide("increase"), interval);

  // Next  and  Previous button function (SVG icon with different classes)
  document.querySelectorAll("svg").forEach((cur) => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () =>
      cur.classList.contains("next") ? slide("increase") : slide("decrease")
    );
  });

  // function to slide when trail is clicked
  const clickCheck = (e) => {
    // CLear interval
    clearInterval(start);
    // remove active class from all trails
    trail.forEach((cur) => cur.classList.remove("trail_active"));
    // Get selected trail
    const check = e.target;
    // add active class
    check.classList.add("trail_active");

    // Update slide value based on the selected trail
    if (check.classList.contains("box1")) {
      value = 0;
    } else if (check.classList.contains("box2")) {
      value = 25;
    } else if (check.classList.contains("box3")) {
      value = 50;
    } else if (check.classList.contains("box4")) {
      value = 75;
    }
    // update trail based on value
    trailUpdate();
    // transfrom slide
    move(value, trailValue);
    // start animation
    animate();
    // start interval
    start = setInterval(() => slide("increase"), interval);
  };

  // Add function to all trails
  trail.forEach((cur) => cur.addEventListener("click", (ev) => clickCheck(ev)));

  // Mobile touch Slide Section
  const touchSlide = (() => {
    let start, move, change, sliderWidth;

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
      // get the touche position of X on the screen
      start = e.touches[0].clientX;
      // (each slide with) the width of the slider container divided by the number of slides
      sliderWidth = slider.clientWidth / trail.length;
    });

    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
      // prevent default function
      e.preventDefault();
      // get the touche position of X on the screen when dragging stops
      move = e.touches[0].clientX;
      // Subtract initial position from end position and save to change variabla
      change = start - move;
    });

    const mobile = (e) => {
      // if change is greater than a quarter of sliderWidth, next else Do NOTHING
      change > sliderWidth / 4 ? slide("increase") : null;
      // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
      change * -1 > sliderWidth / 4 ? slide("decrease") : null;
      // reset all variable to 0
      [start, move, change, sliderWidth] = [0, 0, 0, 0];
    };
    // call mobile on touch end
    slider.addEventListener("touchend", mobile);
  })();

  // accodian menu
  $(".another_box div").hide();
  // $("ul > li:first-child a").next().show();
  $(".another_box ul li a").click(function(){
    $(this).next().slideToggle(300);
    // $(this).next().slideDown(300);
    $(".another_box ul li a").not(this).next().slideUp(300);
    return false;
  });
  $(".another_box ul li a").eq(0).trigger("click");
});

////////client rolling banner
window.onload = function () {
  var bannerLeft = 0;
  var first = 1;
  var last;
  var imgCnt = 0;
  var $img = $(".word_rolling_box span");
  var $first;
  var $last;
  $img.each(function () {
    $(this).css("left", bannerLeft);
    bannerLeft += $(this).width() + 5;
    $(this).attr("id", "banner" + ++imgCnt);
  });
  if (imgCnt > 5) {
    last = imgCnt;

    setInterval(function () {
      $img.each(function () {
        $(this).css("left", $(this).position().left - 3);
      });
      $first = $("#banner" + first);
      $last = $("#banner" + last);
      if ($first.position().left < -1700) {
        $first.css("left", $last.position().left + $last.width() + 5);
        first++;
        last++;
        if (last > imgCnt) {
          last = 1;
        }
        if (first > imgCnt) {
          first = 1;
        }
      }
    }, 10);
  }
  setTimeout(function(){
    $(".loading_wrap").fadeOut(400)
  },3000)
};
