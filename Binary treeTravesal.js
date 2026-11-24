// Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.

// A Node has the following properties:

// var data;   // A number or a string.
// Node left;  // A Node, which is Undefined if there is no left child.
// Node right; // A Node, which is Undefined if there is no right child.
// Pre-order means that we:

// Visit the root.
// Traverse the left subtree (left node).
// Traverse the right subtree (right node).
// In-order means that we:

// Traverse the left subtree (left node).
// Visit the root.
// Traverse the right subtree (right node).
// Post-order means that we:

// Traverse the left subtree (left node).
// Traverse the right subtree (right node).
// Visit the root.
// Let's say we have the following tree:

//                                                 _______
//                                                |       |
//                                                |   A   |
//                                                |_______|
//                                                    |
//                         ___________________________|___________________________
//                         |                                                     |
//                      ___|___                                               ___|___
//                     |       |                                             |       |
//                     |   B   |                                             |   C   |
//                     |_______|                                             |_______|
//                         |                                                     |
//              ___________|___________                               ___________|___________
//              |                     |                               |                     |
//           ___|___               ___|___                         ___|___               ___|___
//          |       |             |       |                       |       |             |       |
//          |   D   |             |   E   |                       |   F   |             |   G   |
//          |_______|             |_______|                       |_______|             |_______|
//     _________|                     |_________            __________|__________
//     |                                       |            |                   |
//  ___|___                                 ___|___      ___|___             ___|___
// |       |                               |       |    |       |           |       |
// |   H   |                               |   I   |    |   J   |           |   K   |
// |_______|                               |_______|    |_______|           |_______|
// Then:

// Pre-order should return: [A, B, D, H, E, I, C, F, J, K, G]
// In-order should return: [H, D, B, E, I, A, J, F, K, C , G]
// Post-order should return: [H, D, I, E, B, J, K, F, G, C, A]



