/**
 * Created by daniel on 24/02/2016.
 */


/**
 * Set a
 * @param {int} x
 * @param {int} y
 * @returns {{x: {int}, y: {int}}}
 * @constructor
 */
var Position = function (x, y) {
    return {
        x: x,
        y: y,
        clone: function () {
            return new Position(this.x, this.y);
        }
    }
};

/**
 * Move a pointer around in a (square) ring, gradually moving out
 * @param {Position} position
 * @constructor
 */
var RingPosition = function (position) {

    var initialPosition = position.clone();
    var step = 0;

    /**
     * What is our x, y position given the current step
     * @param {int} step
     * @returns {Position}
     */
    var positionOnRing = function (step) {

        var ring = whichRing(step);
        var diameter = diameterOfRing(ring);
        var currentStepOnRing = stepOnRing(step, ring);

        var position = initialPosition.clone();
        position.x -= ring;
        position.y -= ring;

        // From top left corner, go around in a circle
        // 0 1 2 3 4    0 1 2 3 0
        // 6 0 1 2 5    3 0 1 0 1
        // 5 7 0 3 7    2 1 0 1 2
        // 4 6 5 4 8    1 0 1 0 3
        // 3 2 1 0 9    0 3 2 1 0

        // diameter = 5

        var smallDiameter = diameter - 1;
        var normaliseStep = smallDiameter == 0 ? 0 : currentStepOnRing % smallDiameter;

        // Left side
        if (currentStepOnRing >= 3 * smallDiameter) {
            position.y += smallDiameter - normaliseStep;
        }
        // Bottom side
        else if (currentStepOnRing >= 2 * smallDiameter) {
            position.x += smallDiameter - normaliseStep;
            position.y += smallDiameter;
        }
        // Right side
        else if (currentStepOnRing >= smallDiameter) {
            position.x += smallDiameter;
            position.y += normaliseStep;
        }
        // Top side
        else {
            position.x += normaliseStep;
        }

        return position;
    };

    /**
     * How many pixels wide is the current ring
     * @param {int} ring
     * @returns {int}
     */
    var diameterOfRing = function (ring) {
        if (ring < 0) {
            return 0;
        }
        return (ring * 2) + 1;
    };

    /**
     * Which ring does the current step reside in
     * @param {int} step
     * @returns {int}
     */
    var whichRing = function (step) {
        var squareRoot = Math.floor(Math.sqrt(step))
        return Math.ceil(squareRoot / 2);
    };

    /**
     * This works out what step along the ring we are, but does not tell you
     * if that step is on the ring in the first place.
     * @param {int} step
     * @param {int} ring
     * @returns {int}
     */
    var stepOnRing = function (step, ring) {
        return step - stepsInRingInclusive(ring - 1);
    };

    /**
     * Returns all steps needed to have gone through before arriving on the
     * current ring
     * @param {int} ring
     * @returns {int}
     */
    var stepsInRingInclusive = function (ring) {
        var width = diameterOfRing(ring);
        return width * width;
    };

    return {
        nextPosition: function () {
            return positionOnRing(step++);
        }
    }
};


var Cloud = function (config) {


    var CircleGenerator = function (initialPosition) {

    };

    var getConfig = function (property, defaultValue) {
        if (typeof defaultValue == 'undefined') {
            defaultValue = null;
        }
        if (config.hasOwnProperty(property)) {
            return config[property];
        }
        return defaultValue;
    };

    var cloudElement = document.getElementById(getConfig('id'));

    if (!cloudElement) {
        console.log('Cloud Id not provided, or element not found.');
        return {};
    }

    var maxSize = getConfig('maxSize', 2);
    var minSize = getConfig('maxSize', 0.5);
    var height = getConfig('height', cloudElement.offsetHeight);
    var width = getConfig('width', cloudElement.offsetWidth);


    // Style box
    cloudElement.style.position = 'relative';
    cloudElement.style.height = height + 'px';
    cloudElement.style.width = width + 'px';

    var positionElement = function (element, position) {
        element.style.top = (position.y + (element.offsetHeight / 2)) + 'px';
        element.style.left = (position.x - (element.offsetWidth / 2)) + 'px';
    };

    // Useful functions
    var styleElement = function (element, size) {
        element.style.fontSize = size + 'rem';
        element.style.display = 'inline-block';
        element.style.position = 'absolute';
    };

    function isElementInCloud(element) {
        return element.offsetLeft > 0
            && element.offsetTop > 0
            && element.offsetLeft < cloudElement.offsetWidth
            && element.offsetTop < cloudElement.offsetHeight
    }

    function areElementsColliding(element1, element2) {
        var rect1 = element1.getBoundingClientRect();
        var rect2 = element2.getBoundingClientRect();
        return !(
            rect1.right < rect2.left
            || rect1.left > rect2.right
            || rect1.bottom < rect2.top
            || rect1.top > rect2.bottom
        );
    }

    function isElementColliding(element) {
        for (var child in cloudElement.children) {
            if (cloudElement.children.hasOwnProperty(child)) {
                if (cloudElement.children[child] === element) {
                    break; // No need to continue, following elements not placed
                }
                if (areElementsColliding(element, cloudElement.children[child])) {
                    return true;
                }
            }
        }
        return false;
    }

    var ring = new RingPosition( new Position(width / 2, height / 2) );

    var positionNode = function (element) {
        positionElement(element, ring.nextPosition());
        while(isElementColliding(element)) {
            if (!isElementInCloud(element)) {
                element.style.display = 'none';
                return false;
            }
           positionElement(element, ring.nextPosition());
        }
        return true;
    };


    // Loop over each child element, making it slightly smaller than the last
    var currentSize = maxSize;
    var tween = (maxSize - minSize) / cloudElement.children.length;

    var child, element;
    for (child in cloudElement.children) {
        if (cloudElement.children.hasOwnProperty(child)) {
            element = cloudElement.children[child];
            element.style.display = 'none';
        }
    }

    for (child in cloudElement.children) {
        if (cloudElement.children.hasOwnProperty(child)) {
            element = cloudElement.children[child];

            styleElement(element, currentSize);
            currentSize -= tween;

            if (!positionNode(element)) {
                break;
            }
            // element.style.display = 'list-item';
        }
    }

    return {};

};
