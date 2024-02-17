<?php 

class Header_Menu_Walker extends Walker {
	/**
	 * What the class handles.
	 *
	 * @since 3.0.0
	 * @var string
	 *
	 * @see Walker::$tree_type
	 */
	public $tree_type = array( 'post_type', 'taxonomy', 'custom' );

	/**
	 * Database fields to use.
	 *
	 * @since 3.0.0
	 * @todo Decouple this.
	 * @var string[]
	 *
	 * @see Walker::$db_fields
	 */
	public $db_fields = array(
		'parent' => 'menu_item_parent',
		'id'     => 'db_id',
	);

	/**
	 * Starts the list before the elements are added.
	 *
	 * @since 3.0.0
	 *
	 * @see Walker::start_lvl()
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */
	public function start_lvl( &$output, $depth = 0, $args = null ) {
		// $output .= '<pre>' . json_encode($data_object->object_id) . '</pre>';
		// $output .= '<pre>' . json_encode($args) . '</pre>';
		$output .= '<div class="hidden group-hover:block">';
		$output .= '<ul>';
	}

	/**
	 * Ends the list of after the elements are added.
	 *
	 * @since 3.0.0
	 *
	 * @see Walker::end_lvl()
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */
	public function end_lvl( &$output, $depth = 0, $args = null ) {
		// $output .= '<pre>' . json_encode($args) . '</pre>';
		$output .= '</div>';
	}

	/**
	 * Starts the element output.
	 *
	 * @since 3.0.0
	 * @since 4.4.0 The {@see 'nav_menu_item_args'} filter was added.
	 * @since 5.9.0 Renamed `$item` to `$data_object` and `$id` to `$current_object_id`
	 *              to match parent class for PHP 8 named parameter support.
	 *
	 * @see Walker::start_el()
	 *
	 * @param string   $output            Used to append additional content (passed by reference).
	 * @param WP_Post  $data_object       Menu item data object.
	 * @param int      $depth             Depth of menu item. Used for padding.
	 * @param stdClass $args              An object of wp_nav_menu() arguments.
	 * @param int      $current_object_id Optional. ID of the current menu item. Default 0.
	 */
	public function start_el( &$output, $data_object, $depth = 0, $args = null, $current_object_id = 0 ) {
		// $output .= '<pre>' . json_encode($data_object->object_id) . '</pre>';
		if($depth == 0) {
			if($args->walker->has_children) {
				$output .= "<li class='primary-li-item group md:relative'>";
			} else {
				$output .= "<li class='primary-li-item'>";
			}
		} else {
			$output .= "<li>";
		}

		if (!$args->walker->has_children) {
			if($depth == 0) {
				if($data_object->title == "Join IEEE") {
					$output .= '<a href="' . $data_object->url .'" class="btn">';
				} else {
					if($data_object->current) {
						$output .= '<a href="' . $data_object->url . '" class="block rounded bg-primary-800 px-3 py-2 font-poppins font-normal text-white md:bg-transparent md:p-0 md:text-primary-800" aria-current="page">';
					} else {
						$output .= '<a href="' . $data_object->url . '" class="primary-a-item">';
					}
				}
			} else {
				if($data_object->current) {
					$output .= '<a href="' . $data_object->url . '" class="text-primary-800">';
				} else {
					$output .= '<a href="' . $data_object->url . '">';
				}
			}
		} else {
			// $output .= '<code>' . json_encode($args) . '</code>';
			$output .= '<button>';
		}
		
		$output .= $data_object->title;
		
		if (!$args->walker->has_children) {
			$output .= '</a>';
		} else {
			$output .= '<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
		  </svg>
		</button>';
		}
	}


// {"menu":"primary","container":"div","container_class":"","container_id":"","container_aria_label":"","menu_class":"menu","menu_id":"","echo":true,"fallback_cb":"wp_page_menu","before":"","after":"","link_before":"","link_after":"","items_wrap":"
// %3$s<\/ul>","item_spacing":"preserve","depth":0,"walker":{"tree_type":["post_type","taxonomy","custom"],"db_fields":{"parent":"menu_item_parent","id":"db_id"},"max_pages":1,"has_children":true},"theme_location":"primary"}More

	/**
	 * Ends the element output, if needed.
	 *
	 * @since 3.0.0
	 * @since 5.9.0 Renamed `$item` to `$data_object` to match parent class for PHP 8 named parameter support.
	 *
	 * @see Walker::end_el()
	 *
	 * @param string   $output      Used to append additional content (passed by reference).
	 * @param WP_Post  $data_object Menu item data object. Not used.
	 * @param int      $depth       Depth of page. Not Used.
	 * @param stdClass $args        An object of wp_nav_menu() arguments.
	 */
	public function end_el( &$output, $data_object, $depth = 0, $args = null ) {
		// $output .= '<pre>' . json_encode($data_object) . '</pre>';
		if ($args->walker->has_children) {
			$output .= '----';
		} else {
			$output .= '</li>';
		}
	}

	/**
	 * Builds a string of HTML attributes from an array of key/value pairs.
	 * Empty values are ignored.
	 *
	 * @since 6.3.0
	 *
	 * @param  array $atts Optional. An array of HTML attribute key/value pairs. Default empty array.
	 * @return string A string of HTML attributes.
	 */
	protected function build_atts( $atts = array() ) {
		$attribute_string = '';
		foreach ( $atts as $attr => $value ) {
			if ( false !== $value && '' !== $value && is_scalar( $value ) ) {
				$value             = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
				$attribute_string .= ' ' . $attr . '="' . $value . '"';
			}
		}
		return $attribute_string;
	}
}
?>