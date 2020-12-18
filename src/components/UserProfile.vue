<template>
  <div class="profile">
    <div class="profile__avatar--names">
      <div class="profile__avatar">
        <user-avatar />
      </div>

      <div class="" data-original-top="0px">
        <h1 class="profile__names pl-2 pl-md-0">
          <span class="profile__fullname" itemprop="name">{{
            profile.name
          }}</span>
          <span class="profile__additional" itemprop="additionalName">{{
            profile.login
          }}</span>
        </h1>
      </div>
    </div>
    <div class="profile__order">
      <div class="profile__jd mb-3">
        <div>{{ profile.bio }}</div>
      </div>

      <div class="profile__follow">
        <div class="profile__followbtn">
          <button
            class="profile__followbtn--default profile__followbtn--fullwidth"
          >
            Follow
          </button>
        </div>

        <!-- <div class="profile__reportdropdown" style="margin-left: 8px;">
          <details
            id="blob-more-options-details"
            class="details-overlay details-reset position-relative"
          >
            <summary
              role="button"
              type="button"
              class="btn profile__followbtn--default "
            >
              <span class="px-2 link-gray">
                <svg
                  aria-label="More options"
                  class="octicon octicon-kebab-horizontal"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  role="img"
                >
                  <path
                    d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
              </span>
            </summary>
            <div>
              <ul class="dropdown-menu dropdown-menu-sw">
                <li>
                  <div>
                    <details
                      class="details-reset details-overlay details-overlay-dark "
                    >
                      <summary class="dropdown-item text-small" role="button">
                        Block or report user
                      </summary>

                      <details-dialog
                        class="Box d-flex flex-column anim-fade-in fast Box-overlay--narrow "
                        aria-label="Block or report chuks-o"
                        role="dialog"
                        aria-modal="true"
                      >
                        <div class="Box-header">
                          <button
                            class="Box-btn-octicon btn-octicon float-right"
                            type="button"
                            aria-label="Close dialog"
                            data-close-dialog=""
                          >
                            <svg
                              class="octicon octicon-x"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                              ></path>
                            </svg>
                          </button>
                          <h1 class="Box-title">Block or report chuks-o</h1>
                        </div>
                        <div class="Box-body overflow-auto">
                          <div class="border-bottom">
                            <form
                              class="mb-3"
                              action="/account/ignore_user/chuks-o"
                              accept-charset="UTF-8"
                              method="post"
                            >
                              <input
                                type="hidden"
                                name="authenticity_token"
                                value="4x6am6FetxvVjypHfClQe1OaQyaWY2nw32/RSH6Jc3P27TJMmz7tv6J/NWfEAhrpskNUcP4cW4Fc0dJPsqCqVQ=="
                              />
                              <strong>Block user</strong>
                              <p>
                                Prevent this user from interacting with your
                                repositories and sending you notifications.
                                Learn more about
                                <a
                                  href="https://docs.github.com/en/articles/blocking-a-user-from-your-personal-account"
                                  >blocking users</a
                                >.
                              </p>

                              <button type="submit" class="btn btn-danger">
                                Block user
                              </button>
                            </form>
                          </div>
                          <div class="mt-3">
                            <strong>Report abuse</strong>
                            <p>
                              Contact GitHub support about this user’s behavior.
                              Learn more about
                              <a
                                href="https://docs.github.com/en/articles/reporting-abuse-or-spam"
                                >reporting abuse</a
                              >.
                            </p>
                            <a
                              href="/contact/report-abuse?report=chuks-o+%28user%29"
                              class="btn btn-danger"
                              >Report abuse</a
                            >
                          </div>
                        </div>
                      </details-dialog>
                    </details>
                  </div>
                </li>
              </ul>
            </div></details
          >
        </div> -->
      </div>

      <div class="profile__followers" style="">
        <div class="mb-3 " style="display: flex; align-items: center;">
          <a class="profile__followers--text" :href="profile.followers_url">
            <svg
              class="icon text-gray-light"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
              ></path>
            </svg>
            <span class="text-bold text-gray-dark">{{
              profile.followers
            }}</span>
            followers
          </a>
          ·
          <a class="profile__followers--text" :href="profile.following_url">
            <span class="text-bold text-gray-dark">
              {{ profile.following }}
            </span>
            following
          </a>
          ·
          <a class="profile__followers--text" :href="profile.starred_url">
            <svg
              class="icon text-gray-light"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <span class="text-bold text-gray-dark">2</span>
          </a>
        </div>
      </div>

      <div class="">
        <div
          class="profile_location"
          itemprop="homeLocation"
          show_title="false"
          aria-label="Home location: Lagos, Nigeria"
        >
          <svg
            class="icon icon-gray"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          <span class="">{{ profile.location }}</span>
        </div>
        <div itemprop="email" aria-label="Email: " class="profile__location">
          <svg
            class="icon icon-gray"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
            ></path>
          </svg>
          <a
            rel="nofollow"
            class=" "
            href="/login?return_to=https%3A%2F%2Fgithub.com%2Fchuks-o%3Ftab%3Drepositories"
            >Sign in to view email</a
          >
        </div>
      </div>

      <div class="profile-highlight">
        <profile-highlight />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHighlight from "./ProfileHighlight.vue";
import UserAvatar from "./UserAvatar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ProfileHighlight,
    UserAvatar
  },
  computed: {
    ...mapGetters(["profile"])
  }
};
</script>

<style>
.profile {
  padding-right: 16px;
  padding-left: 8px;
}
.profile__avatar {
  z-index: 4;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  margin-top: -35px;
}
.profile__names {
  font-weight: 600;
  padding: 0;
  line-height: 1;
}
.profile__fullname {
  display: block;
  font-size: 26px;
  line-height: 1.25;
  overflow: hidden;
}
.profile__additional {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: var(--text-secondary);
}
.profile__jd {
  font-size: var(--ft-16);
}
.profile__follow {
  display: flex;
  margin-bottom: 16px;
}
.profile__followbtn {
  flex: 1;
}

.profile__followbtn--default {
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 1px solid;
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: var(--text-dark);
  background-color: var(--btn-light);
  border-color: #1b1f2326;
  box-shadow: 0 1px 0 #1b1f230a, inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}
.profile__followbtn--fullwidth {
  display: block;
  width: 100%;
  text-align: center;
}

/* profile dropdown btn */
.profile__dropdown {
  margin-left: 8px;
  flex-shrink: 0;
  align-items: center;
}
.profile__moreoptions {
  align-items: center;
  display: flex;
  padding: 2px 3px;
}

.profile__followers {
  order: 1;
  -ms-flex-order: 1;
  margin-top: 8px;
}
.profile__followers--text {
  margin-right: 5px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  color: var(--text-secondary);
}
.profile__followers--text span {
  margin-right: 4px;
}

.icon {
  margin-right: 4px;
  vertical-align: text-bottom;
  display: inline-block;
  fill: currentColor;
}

.profile_location {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}
.profile__location span,
.profile__location a {
  color: var(--text-dark);
}
.profile__location a {
  text-decoration: none;
}
.profile__location a:hover {
  color: var(--text-link);
  text-decoration: underline;
}
@media (max-width: 767px) {
  .profile__avatar {
    margin: 0px 16px 5px 0px;
  }
  .profile-highlight {
    display: none;
  }
  .profile__avatar--names {
    display: flex;
  }
  .profile__order {
    display: flex;
    flex-direction: column;
  }
  .profile_location {
    display: none;
  }
  .profile__followers {
    order: 1;
  }
  .profile__follow {
    order: 2;
  }
}
</style>
