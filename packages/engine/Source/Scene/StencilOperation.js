import WebGLConstants from "../Core/WebGLConstants.js";

/**
 * Determines the action taken based on the result of the stencil test.
 *
 * @enum {number}
 */
const StencilOperation = {
  /**
   * Sets the stencil buffer value to zero.
   *
   * @type {number}
   * @constant
   */
  ZERO: WebGLConstants.ZERO,

  /**
   * Does not change the stencil buffer.
   *
   * @type {number}
   * @constant
   */
  KEEP: WebGLConstants.KEEP,

  /**
   * Replaces the stencil buffer value with the reference value.
   *
   * @type {number}
   * @constant
   */
  REPLACE: WebGLConstants.REPLACE,

  /**
   * Increments the stencil buffer value, clamping to unsigned byte.
   *
   * @type {number}
   * @constant
   */
  INCREMENT: WebGLConstants.INCR,

  /**
   * Decrements the stencil buffer value, clamping to zero.
   *
   * @type {number}
   * @constant
   */
  DECREMENT: WebGLConstants.DECR,

  /**
   * Bitwise inverts the existing stencil buffer value.
   *
   * @type {number}
   * @constant
   */
  INVERT: WebGLConstants.INVERT,

  /**
   * Increments the stencil buffer value, wrapping to zero when exceeding the unsigned byte range.
   *
   * @type {number}
   * @constant
   */
  INCREMENT_WRAP: WebGLConstants.INCR_WRAP,

  /**
   * Decrements the stencil buffer value, wrapping to the maximum unsigned byte instead of going below zero.
   *
   * @type {number}
   * @constant
   */
  DECREMENT_WRAP: WebGLConstants.DECR_WRAP,
};
export default Object.freeze(StencilOperation);
